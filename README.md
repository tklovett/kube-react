# kube-react

A purely hypothetical thought experiment

## Built-in Components Generated from Kuberentes Protobufs

```js
/* package core/v1 */

// This doesn't actually exist as a core/v1 resource today
function ResourceSpec({memory, cpu}) {
  validate(memory);
  validate(cpu);
  return {
    "memory": `${memory}`
    "cpu": `${cpu}`
  }
}

function ResourceRequirements({requests, limits}) {
  validate(request, limits);
  return {
    "resources": {
      "requests": <ResourceSpec value={requests}>,
      "limits": <ResourceSpec value={limits}>
    }
  }
}

function Container(props) {
  return {
    "name": `${props.name}`
    "image": `${props.image}`
    "resources": <v1.ResourceRequirements value={props.resources}>
    // ...
  }
}

function PodSpec(props) {
  const containers = props.containers.forEach(container) => {
    return <Container value={container}>
    };
  };
  return {
    "containers": {containers}
    // ...
  }
}

function PodTemplateSpec(props) {
  return {
    "metadata": <ObjectMeta>,
    "spec": <PodSpec>
  }
}
```

```js
/* package apps/v1 */

function DeploymentSpec(props) {
  return {
    template: <PodTemplateSpec>
    // ...
  }
}

function Deployment(props) {
  return {
    "metadata": <ObjectMeta>,
    "spec": <DeploymentSpec>
    // ...
  }
}
```

## At the Application Level

```js
import { ConfigMap } from 'core.v1'
import { Deployment, Service } from 'apps.v1'
import ServiceMonitor from 'monitoring.coreos.com'

function BackendAPI(props) {
  <Deployment value={this.props.deployment}>
  <Service value={this.props.service}>
  <ServiceMonitor value={this.props.service}>
  <ConfigMap>
}
```

```js
function Backend(props) {
  return [
    <NginxIngress value={this.props.nginx} />,
    <Memcached value={this.props.memcached} />,
    <BackendAPI value={this.props.backendApi} />,
  ]
}
```

## Render Kubernetes manfiests Using `kube-react`

```sh
kube-react render --config-switch production > manifests.yaml

cat manifests.yaml | kubectl apply --filename -
```

## A Tangent on "Terrakube"

Wouldn't it be nice if Kubernetes had a full-featured state manager? Terraform has great workflow, semantics,
and features – even if you think the Hashicorp Configuration Language leaves something to be desired.

### Import Existing Resources into state management

```sh
terrakube import ${terrakube_id} ${external_id}
```

### Sync configuration to cluster using Terrakube

```sh
terrakube plan --from-file manifests.yaml --to-plan-file planfile.txt
terrakube apply --auto-approve --from-plan-file planfile.txt
```

### Destroy resources selectively

```sh
terrakube taint ${terrakube_id}
terrakube destroy ${terrakube_id}
```
