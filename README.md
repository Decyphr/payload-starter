# Payload Starter

## Get Started

TODO

## Hosting

We will be hosting the application on Google Cloud Platform (GCP) using terraform to manage the infrastructure.

---

### Create Artifact Registry Repository & Image

In order to host on GCP Cloud Run, we will need a docker image setup in the GCP Artifact Registry.

1a. Create a new Artifact Registry Repository

```bash
gcloud artifacts repositories create <REPO_NAME> --repository-format=docker \
    --location=us-central1 --description="Docker repository" \
    --project=<PROJECT_ID>
```

1b. Verify the repository was created _(this should show the new repository)_

```bash
gcloud artifacts repositories list --project=<PROJECT_ID>
```

2. Build docker image locally

```bash
docker build -t <IMAGE_NAME> .
```

3. Tag the image with the Artifact Registry repository

```bash
docker tag <IMAGE_NAME> us-central1-docker.pkg.dev/<PROJECT_ID>/<REPO_NAME>/<IMAGE_NAME>:latest
```

4. Push the image to the Artifact Registry

```bash
docker push us-central1-docker.pkg.dev/freelance-410115/demo-artifact-repository/demo-payload-image:latest
```

5. Update the `cloudrun_image` in the `terraform/terraform.tfvars` file

```terraform
cloudrun_image = "us-central1-docker.pkg.dev/<PROJECT_ID>/<REPO_NAME>/<IMAGE_NAME>:latest"
```

---

### Initialize GCP Cloud Infrastructure with Terraform

1. Naviagte to the `terraform` directory

```bash
cd terraform
```

2. Initialize the Terraform directory

```bash
terraform init
```

3. Set all required Terraform variables in the `terraform/terraform.tfvars` file and validate the configuration

```bash
terraform fmt && terraform validate
```

4. Plan the Terraform changes

```bash
terraform plan -out=all-plan
```

5. Apply the Terraform changes

```bash
terraform apply "all-plan"
```
