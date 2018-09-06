pipeline {
  agent any {
    stages {
      stage('Checkout scm') {
        steps {
          checkout scm
        }
      }
      stage('Kubectl test...') {
        steps {
          sh("kubectl get pods")
          sh("kubectl apply -f deployment.yaml")
        }
      } 
    }
  }
}
