pipeline {
    agent any

    environment {
        APP_PORT = '3000'
        APP_NAME = 'smart-portal'
    }

    stages {
        stage('Cloning repository') {
            steps {
                git url: 'https://github.com/edwinndev/smart-portal.git',
                    credentialsId: 'github',
                    branch: 'main'
            }
        }

        stage('Build') {
            steps {
                script {
                    docker.build(APP_NAME, '.')
                }
            }
        }

        stage('Deploying application') {
            steps {
                script {
                    sh """
                    docker ps -a
                    docker stop ${APP_NAME} || true
                    docker rm ${APP_NAME} || true
                    """

                    sh """
                    docker run -d --name ${APP_NAME} -p ${APP_PORT}:8080 ${APP_NAME}
                    """
                }
            }
        }
    }

    post {
        always {
            sh 'docker system prune -f || true'
        }
        success {
            echo 'Build successful'
        }
        failure {
            echo 'Build with errors'
        }
    }
}
