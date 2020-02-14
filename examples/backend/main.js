import { NginxIngress, Memcached } from 'stable'
import BackendAPI from './backend-api'

function Backend(props) {
  return [
    <NginxIngress value={this.props.nginx}/>,
    <Memcached value={this.props.memcached}/>,
    <BackendAPI value={this.props.backendApi}/>,
  ]
}