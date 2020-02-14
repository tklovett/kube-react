# kube-react

_A little thought experiment..._

Web and UI developers spent many years writing templated "wrappers" around declarative object models. They generated full HTML using
PHP, Handlebars, FlightJS, etc. Those smart folks experienced the limitations and pain points in using _templating_ to achieve reusability. 
Some of those smart folks came up with a new model – ReactJS. In place of _templating_, ReactJS uses _composition_.

We users of Helm may be finding ourselves in a similar world, using the Go Template Language to generate YAML. Maybe we can piggy
back off the learnings of our colleagues, and leverage composition of components...

Thoughts:

* NodeJS is by no means a language du jour in the DevOps world
* This is not ReactJS and isn't really trying to be. We're just trying to piggy back off of the good parts.
* Having a package manager for deploying 3rd party systems is 💯👌. Thanks Helm.

## Built-in Components Generated from Kubernetes Protobufs

* See [examples/kubernetes/core/v1](https://github.com/tklovett/kube-react/tree/master/examples/kubernetes/core/v1/index.js)
* See [examples/kubernetes/apps/v1](https://github.com/tklovett/kube-react/tree/master/examples/kubernetes/apps/v1/index.js)

## End-user Usage

* See [examples/backend](https://github.com/tklovett/kube-react/tree/master/examples/backend).

## Tooling: "`kube-react`"

### Render Kubernetes manifests

```sh
kube-react render --file examples/backend/main.js --config-switch production > manifests.yaml
```

### Apply changes

```sh
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
