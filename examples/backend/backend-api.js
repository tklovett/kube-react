import { ConfigMap } from 'core.v1'
import { Deployment, Service } from 'apps.v1'
import ServiceMonitor from 'monitoring.coreos.com'

function BackendAPI(props) {
  return [
    <Deployment value={this.props.deployment}/>,
    <Service value={this.props.service}/>,
    <ServiceMonitor value={this.props.service}/>,
    <ConfigMap />,
  ]
}