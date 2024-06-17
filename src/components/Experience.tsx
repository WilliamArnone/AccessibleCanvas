import { A11y, A11ySection } from "@react-three/a11y";
import { Float } from "@react-three/drei";

export default function Experience() {
  return (
    <>
      <A11ySection label="Experience" description="3 accessible geometries">
        <group position={[-2, 0, 0]}>
          <A11y
            role="content"
            description="Orange Sphere"
            focusCall={() => console.log("Orange Sphere")}
          >
            <Float>
              <mesh>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshBasicMaterial color={"orange"} />
              </mesh>
            </Float>
          </A11y>
        </group>
        <group>
          <A11y
            role="content"
            description="Green Cube"
            focusCall={() => console.log("Green Cube")}
          >
            <Float>
              <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial color={"green"} />
              </mesh>
            </Float>
          </A11y>
        </group>
        <group position={[2, 0, 0]}>
          <A11y
            role="content"
            description="Blue Cone"
            focusCall={() => console.log("Blue Cone")}
          >
            <Float>
              <mesh>
                <coneGeometry args={[0.5, 1, 32]} />
                <meshBasicMaterial color={"blue"} />
              </mesh>
            </Float>
          </A11y>
        </group>
      </A11ySection>
    </>
  );
}
