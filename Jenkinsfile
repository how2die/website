pipeline {
  agent any
  stages {
    stage('Build Docker image') {
      steps {
        sh("docker build . -t how2die/website")
      }
    } 
    stage('Kubernetes deploy') {
      steps {
        sh("kubectl apply -f k8s/deployment.yml")
      }
    } 
  }
}
