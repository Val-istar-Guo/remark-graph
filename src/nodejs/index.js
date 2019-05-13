// write your code here
import vist from 'unist-util-visit'
import genSvg from './genSvg'


const definition = `graph TD;
A-->B;
A-->C;
B-->D;
C-->D;`;

export default ({ alias = {} } = {}) => {
}
