import { ConfigMap, Secret } from '../kubernetes/core/v1'
import { Deployment, Service } from '../kubernetes/apps/v1'
import ServiceMonitor from 'monitoring.coreos.com'

function BackendAPI(props) {
  return {
    "deployment": <Deployment value={props.deployment} />,
    "service": <Service value={props.service} />,
    "serviceMonitor": <ServiceMonitor value={props.service} />,
    "configMap": <ConfigMap value={props.configMap} />,
    "secret": <Secret value={props.secret} />,
  }
}

export default {
  BackendAPI
}