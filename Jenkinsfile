pipeline {
  agent any
  stages {
    stage('Kubectl test...') {
      steps {
        sh("kubectl apply -f k8s/deployment.yml")
      }
    } 
  }
}
