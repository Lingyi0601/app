import React,{useState, useRef, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {useSize} from '../../utils/use-size';
import styled from 'styled-components';
import {ConfigureBasePane} from './pane';

import supports_kb from './../../../public/definitions/supported_kbs.json'


import {PositionedKeyboard} from '../positioned-keyboard';
import {Grid, Row, FlexCell, IconContainer, MenuCell, Cell} from './grid';
import {Badge} from './configure-panes/badge';
import {AccentButtonLarge} from '../inputs/accent-button';
import {useAppSelector} from 'src/store/hooks';
import {getSelectedDefinition} from 'src/store/definitionsSlice';
import type { Props } from 'react-select';


const MenuContainer = styled.div`
  padding: 15px 30px 20px 10px;
`;

// supports_kb.vendorProductIds.v2.forEach(()=>{})

const MyMenuCell = styled(Cell)`
  grid-area: 1 / 1 / 3 / 2;
`;
const MyFlexCell = styled(Cell)` 
  overflow: auto;
  word-wrap: normal|break-word;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  position: relative;
  background: var(--gradient);
  grid-area: 1 / 2 / 3 / 2;
`;

// export default class textArea extends Component{
//   constructor(){
//     super();
//     this.state={
//       val:kbToString(v2)
//     }
//   }
//   render(): React.ReactNode {
//     return (
//     )
//   }
// }

type State = {
  context:string;
};


class textArea extends React.Component<Props,State>{
  constructor(prop:Props){
    super(prop);
    this.state={
      context : kbToString(v2)
    }
  }
  render(): React.ReactNode {
    return (
      <MyFlexCell>
        {this.state.context}
      </MyFlexCell>
      )
  }
}

var v2 = supports_kb.vendorProductIds.v2;
var v3 = supports_kb.vendorProductIds.v3;
var supported_kbs_id=kbToString(v2);

function kbToString(data:number[]){
  var s='';
  for(var i=0;i<data.length;i++){
    s+=data[i].toString(16)+',\t';
    if(i%14==0){
      s += "\n";
    }
  }
  s=s.substring(0,s.length-2);
  return s;
}
function aa(){
  var a=document.getElementById("cell");
  if(a!=null)
  a.textContent=kbToString(v2);
}

function ab(){
  var a=document.getElementById("cell");
  if(a!=null)
  a.textContent=kbToString(v3);
}

function ac(){
  var a=document.getElementById("cell");
  if(a!=null)
  a.textContent="QQ94795254";
}

export const About = () => {
  return (
    <Grid>
      <MyMenuCell>
        <MenuContainer>
          <Row selected={false} onClick={aa}>
            v2
          </Row>
          <Row selected={false} onClick={ab}>
            v3
          </Row>
          <Row selected={false} onClick={ac}>
            About
          </Row>
        </MenuContainer>
      </MyMenuCell>
      <MyFlexCell id='cell'>
        {supported_kbs_id}
      </MyFlexCell>
    </Grid>
    //    <Grid>
    //    <MenuCell>
    //      <MenuContainer>
    //        {(KeyboardRows || []).map(
    //          ({Icon, Title}: {Icon: any; Title: string}, idx: number) => (
    //            <Row
    //              key={idx}
    //              onClick={(_) => setRow(idx)}
    //              selected={selectedRow === idx}
    //            >
    //              <IconContainer>
    //                <Icon />
    //              </IconContainer>
    //              {Title}
    //            </Row>
    //          ),
    //        )}
    //      </MenuContainer>
    //    </MenuCell>
 
    //    <FlexCell ref={flexRef} onClick={() => dispatch(clearSelectedKey())}>
    //      <PositionedKeyboard
    //        containerDimensions={dimensions}
    //        selectable={selectedTitle === 'Keymap'}
    //      />
    //      <ReactTooltip />
    //      <LayerControl />
    //      <Badge />
    //    </FlexCell>
    //    {SelectedPane && <SelectedPane />}
    //  </Grid>
  );
};

// const ConfigureGrid = () => {
//   const dispatch = useDispatch();

//   const [selectedRow, setRow] = useState(0);

//   const flexRef = useRef(null);
//   const dimensions = useSize(flexRef);

//   const KeyboardRows = getRowsForKeyboard();
//   const SelectedPane = KeyboardRows[selectedRow]?.Pane;
//   const selectedTitle = KeyboardRows[selectedRow]?.Title;

//   return (
//     <Grid>
//       <MenuCell>
//         <MenuContainer>
//           {(KeyboardRows || []).map(
//             ({Icon, Title}: {Icon: any; Title: string}, idx: number) => (
              // <Row
              //   key={idx}
              //   onClick={(_) => setRow(idx)}
              //   selected={selectedRow === idx}
              // >
              //   <IconContainer>
              //     <Icon />
              //   </IconContainer>
              //   {Title}
              // </Row>
//             ),
//           )}
//         </MenuContainer>
//       </MenuCell>

//       <FlexCell ref={flexRef} onClick={() => dispatch(clearSelectedKey())}>
//         <PositionedKeyboard
//           containerDimensions={dimensions}
//           selectable={selectedTitle === 'Keymap'}
//         />
//         <ReactTooltip />
//         <LayerControl />
//         <Badge />
//       </FlexCell>
//       {SelectedPane && <SelectedPane />}
//     </Grid>
//   );
// };
