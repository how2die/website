def project = 'how2die'
def appName = 'website'
#def imageTag = "gcr.io/${project}/${appName}:${env.BRANCH_NAME}.${env.BUILD_NUMBER}"

pipeline {
  agent {
    kubernetes {
      label 'jenkins'
      defaultContainer 'jnlp'
      yaml """
apiVersion: v1
kind: Pod
metadata:
labels:
  component: ci
spec:
  serviceAccountName: jenkins
  containers:
  - name: kubectl
    image: gcr.io/cloud-builders/kubectl
    command:
    - cat
    tty: true
"""
}
  }
  stages {
    #stage('Build and push image with Container Builder') {
    #  steps {
    #    container('gcloud') {
    #      sh "PYTHONUNBUFFERED=1 gcloud container builds submit -t ${imageTag} ."
    #    }
    #  }
    #}
    stage('Deploy Production') {
      # Production branch
      when { branch 'master' }
      steps{
        container('kubectl') {
        # Change deployed image in canary to the one we just built
        #  sh("sed -i.bak 's#gcr.io/cloud-solutions-images/gceme:1.0.0#${imageTag}#' ./k8s/production/*.yaml")
          sh("kubectl apply -f k8s/")
        #  sh("echo http://`kubectl --namespace=production get service/${feSvcName} -o jsonpath='{.status.loadBalancer.ingress[0].ip}'` > ${feSvcName}")
        }
      }
    }
  }
}
