pipeline {
  agent any
  stages {
    stage('Checkout scm') {
      steps {
        checkout scm
      }
    }
    stage('Kubectl test...') {
      steps {
        sh("kubectl get pods")
        sh("ls")
        sh("kubectl apply -f k8s/deployment.yaml")
      }
    } 
  }
}
