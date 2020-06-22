node {
    def app

    stage('Clone repository') {
        /* Cloning the Repository to our Workspace */

        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image */

        app = docker.build("zammagoude/myy:win -f docker-windows/Dockerfile .")
    }

    stage('Test image') {

        app.inside {
            echo "Tests passed"
        }
    }

    stage('Push image') {
        withCredentials([usernamePassword( credentialsId: 'docker-hub', usernameVariable: 'zammagoude', passwordVariable: 'Srbe26sng')]) {
            def registry_url = "registry.hub.docker.com/"
            bat "docker login -u $USER -p $PASSWORD ${registry_url}"
            docker.withRegistry("http://${registry_url}", "docker-hub-credentials") {
                // Push your image now
                bat "docker push zammagoude/myy:build"
            }
        }
    }
