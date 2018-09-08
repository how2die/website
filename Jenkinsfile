def project = "how2die"
def app = "website"
def imageTag = $project/$app
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
        sh("docker tag $imageTag $imageTag")
        sh("echo $DOCKER_PASSWORD | docker login --username $DOCKER_USER_ID --password-stdin $DOCKER_REGISTRY_URL")
        sh("docker push $imageTag")
      }
    } 	
    stage('Deploy to production') {
      when { branch 'master' }
      steps {
        sh("kubectl apply -f $deploymentConfig")
      }
    } 
  }
}
