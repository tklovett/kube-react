
function DeploymentSpec(props) {
  return {
    template: <PodTemplateSpec value="{props.template}" />
    // ...
  }
}

function Deployment(props) {
  return {
    "metadata": <ObjectMeta value="{props.metadata}" />,
    "spec": <DeploymentSpec value="{props.spec}" />
    // ...
  }
}

function Service(props) {
  return {
    "metadata": <ObjectMeta value="{props.metadata}" />,
    "spec": <ServiceSpec value="{props.spec}" />
    // ...
  }
}

function ServiceSpec(props) {
  return {
    // ...
  }
}

export default {
  Deployment,
  DeploymentSpec,
  Service,
  ServiceSpec
}