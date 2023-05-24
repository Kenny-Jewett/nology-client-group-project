packer {
  required_plugins {
    docker = {
      version = ">= 1.0.0"
      source  = "github.com/hashicorp/docker"
    }
  }
}

source "docker" "ubuntu" {
  image = "ubuntu:latest"
  commit = true
}

build {
  name    = "startup"
  sources = ["source.docker.ubuntu"]

  provisioner "shell" {
    inline = [
      "apt-get update",
      "apt-get upgrade",
      "apt-get install -y git",
    ]
  }

  provisioner "git" {
    repository = "https://github.com/Kenny-Jewett/nology-client-group-project.git"
    skip_clone = true
  }

  post-processor "docker-tag" {
    repository = "container-startup"
  }
}