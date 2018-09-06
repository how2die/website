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
        sh("kubectl apply -f k8s/deployment.yml")
      }
    } 
  }
}
