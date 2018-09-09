def project = "how2die"
def app = "website"
def imageTag = "$project/$app"
def deploymentName = "website"
def deploymentConfig = "deployment.yml"

pipeline {
  agent any
  stages {
    stage('Build Docker image') {
      steps {
        sh("docker build . -t $imageTag")
      }
    }
    stage('Push Docker image') {
      steps {
        withCredentials([[$class: 'UsernamePasswordMultiBinding', 
            credentialsId: 'docker-hub',
            usernameVariable: 'DOCKER_HUB_USER_ID', 
            passwordVariable: 'DOCKER_HUB_PASSWORD']]) {
          def repoImageTag = "$DOCKER_HUB_USER_ID/$app"
          sh("docker tag $imageTag $repoImageTag")
          sh("echo $DOCKER_HUB_PASSWORD | docker login --username $DOCKER_HUB_USER_ID")
          sh("docker push $repoImageTag")
        }
      }
    } 	
    stage('Deploy to production') {
      when { branch 'master' }
      steps {
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
