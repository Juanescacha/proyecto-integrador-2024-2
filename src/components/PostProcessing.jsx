import { EffectComposer, HueSaturation } from "@react-three/postprocessing";

const PostProcessing = () => {
  return (
    <EffectComposer>
      <HueSaturation hue={-0.1} saturation={0.2} />
    </EffectComposer>
  );
};

export default PostProcessing;