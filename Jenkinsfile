def project = "how2die"
def app = "website"
def dockerId = $project
def imageTag = $project/$app
def deploymentConfig = "deployment.yml"
pipeline {
  agent any
  stages {
    stage('Build Docker image') {
      steps {
        sh("docker build . -t $imageName")
      }
    }
    stage('Push Docker image') {
      steps {
        sh("docker tag $imageName $imageName")
        sh("docker push $imageName")
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
