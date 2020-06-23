node {

    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub') {

        def customImage = docker.build("zammagoude/nodeappjs")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
