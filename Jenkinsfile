def imageName = "how2die/website"
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
    stage('Kubernetes deploy') {
      steps {
        sh("kubectl apply -f $deploymentConfig")
      }
    } 
  }
}
