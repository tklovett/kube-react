# kube-react

A purely hypothetical thought experiment

## Built-in Components Generated from Kubernetes Protobufs

* See [examples/kubernetes/core/v1](https://github.com/tklovett/kube-react/tree/master/examples/kubernetes/core/v1).
* See [examples/kubernetes/apps/v1](https://github.com/tklovett/kube-react/tree/master/examples/kubernetes/apps/v1).

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
