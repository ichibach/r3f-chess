import { OrbitControls } from '@react-three/drei';
import {useFrame, useThree} from "@react-three/fiber";
import * as THREE from 'three';
import {useAppSelector} from "../app/hooks";
import {selectBoard} from "../features/board/boardSlice";
import {selectTurn} from "../features/turnSlice";
import {useEffect} from "react";



const cameraPositions = {
  'b': new THREE.Vector3(0, 5, 7),
  'w': new THREE.Vector3(0, 5, -7)
}


function CameraControls() {
  
  const { value } = useAppSelector(selectTurn);
  const {camera} = useThree();
  
  useEffect(() => {
    camera.position.copy(cameraPositions[value])
  },[value])
  
  
  return <OrbitControls/>;
}


export default CameraControls;