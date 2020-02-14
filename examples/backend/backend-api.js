import { ConfigMap, Secret } from 'core.v1'
import { Deployment, Service } from 'apps.v1'
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