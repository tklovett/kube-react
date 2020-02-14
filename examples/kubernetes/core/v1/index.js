// This doesn't actually exist as a core/v1 resource today
function ResourceSpec({memory, cpu}) {
  validate(memory);
  validate(cpu);
  return {
    "memory": `${memory}`,
    "cpu": `${cpu}`
  }
}

function ResourceRequirements({requests, limits}) {
  validate(request, limits);
  return {
    "resources": {
      "requests": <ResourceSpec value={requests} />,
      "limits": <ResourceSpec value={limits} />
    }
  }
}

function Container(props) {
  return {
    "name": `${props.name}`,
    "image": `${props.image}`,
    "resources": <ResourceRequirements value={props.resources} />
    // ...
  }
}

function PodSpec(props) {
  const containers = props.containers
  .map(container => {
    return <Container value={container} />;
  });

  return {
    "containers": {containers}
    // ...
  }
}

function PodTemplateSpec(props) {
  return {
    "metadata": <ObjectMeta value={props.metadata} />,
    "spec": <PodSpec value={props.spec} />
  }
}

function Secret(props) {
  return {
    "metadata": <ObjectMeta value={props.metadata} />,
    "stringData": props.data,
    // ...
  }
}
function ConfigMap(props) {
  return {
    "metadata": <ObjectMeta value={props.metadata} />,
    "data": props.data,
    // ...
  }
}

export default {
  ResourceSpec,
  ResourceRequirements,
  Container,
  PodSpec,
  PodTemplateSpec,
  Secret,
  ConfigMap
}