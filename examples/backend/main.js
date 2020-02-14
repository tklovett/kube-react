import { NginxIngress, Memcached } from 'stable'
import BackendAPI from './backend-api'

function Backend(props) {
  return {
    "nginxIngress": <NginxIngress value={props.nginx} />,
    "memcached": <Memcached value={props.memcached} />,
    "backendAPI": <BackendAPI value={props.backendApi} />,
  }
}