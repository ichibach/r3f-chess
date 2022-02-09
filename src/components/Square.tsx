import * as THREE from 'three';


const Square = (props) => {

    const {
        color,
        position=null,
        opacity=1,
        onClick=Function.prototype
    } = props

    return (
        <mesh 
            rotation={[-Math.PI / 2, 0, 0]}
            position={position ? position : [0,0,0]}
            onClick={onClick}
        >
            <planeGeometry args={[1, 1]} />
            <meshLambertMaterial
                color={color}
                side={THREE.DoubleSide}
                transparent={true}
                opacity={opacity}
            />
        </mesh>
    )
}

export default Square

