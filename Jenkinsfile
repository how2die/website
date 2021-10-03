def project = "how2die"
def app = "website"
def imageTag = "$project/$app"
def deploymentName = "website"
def deploymentConfig = "deployment.yaml"

pipeline {
  agent {
    kubernetes {
      yaml '''
        apiVersion: v1
        kind: Pod
        metadata:
          labels:
            some-label: pod
        spec:
          containers:
          - name: docker
            image: docker.io/docker:20.10.8
            command:
            - cat
            tty: true
            securityContext:
              privileged: true
            volumeMounts:
            - name: dockersock
              #mountPath: /var/run/docker.sock
              mountPath: /var/run
          - name: jnlp
            image: jenkins/inbound-agent:4.10-3-jdk11
            command: ["sleep", "10000"]
          volumes:
          - name: dockersock
            hostPath:
              #path: /var/run/docker.sock
              path: /var/run/dind/
      '''
    }
  }
  stages {
    stage('Build Docker image') {
      steps {
        container('docker') {
          sh("docker build . -t $imageTag")
        }
      }
    }
    stage('Push Docker image') {
      steps {
        container('docker') {
          withCredentials([[$class: 'UsernamePasswordMultiBinding', 
              credentialsId: 'docker-hub',
              usernameVariable: 'DOCKER_HUB_USER_ID', 
              passwordVariable: 'DOCKER_HUB_PASSWORD']]) {
            sh("docker tag $imageTag $DOCKER_HUB_USER_ID/$app")
            sh("echo $DOCKER_HUB_PASSWORD | docker login --username $DOCKER_HUB_USER_ID --password-stdin")
            sh("docker push $DOCKER_HUB_USER_ID/$app")
          }
        }
      }
    } 	
    stage('Deploy to production') {
      when { branch 'master' }
      steps {
        containter('docker') {
          sh("kubectl apply -f $deploymentConfig")
          // Modify Deployment config to force image repull
          sh("""
            kubectl patch deployment $deploymentName -p \
            "{\\"spec\\":{\\"template\\":{\\"metadata\\":{\\"labels\\":{\\"date\\":\\"`date +'%s'`\\"}}}}}"
          """)
        }
      }
    } 
  }
}

