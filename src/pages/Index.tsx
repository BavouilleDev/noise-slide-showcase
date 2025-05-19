
import React from "react";
import NoiseSection from "@/components/NoiseSection";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-6">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-900">Noise Algorithm Showcase</h1>
          <p className="text-gray-600 text-center mt-2">
            Interactive visualization of procedural generation techniques
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Perlin Noise Section */}
        <NoiseSection
          title="Perlin Noise"
          description="Perlin noise is a gradient noise developed by Ken Perlin in 1983. It's used to generate natural-looking textures, terrains, and other visual effects. Slide to compare the mathematical representation with the visual output."
          leftImage="/lovable-uploads/09f9523c-7eaa-4c30-aaa9-1dd7e209596f.png"
          rightImage="/lovable-uploads/c8f96ee9-c021-4fe7-94c1-0d3e8a460de5.png"
          leftAlt="Perlin Noise Texture"
          rightAlt="Perlin Noise Graph"
          className="bg-white"
        />

        {/* Simplex Noise Section */}
        <NoiseSection
          title="Simplex Noise"
          description="Simplex noise is an improvement on Perlin noise developed by Ken Perlin in 2001. It features lower computational complexity and fewer directional artifacts. Slide to compare the 3D mesh representation with the wireframe view."
          leftImage="/lovable-uploads/f17e6fb3-6401-4879-a1e3-14fc7e852009.png"
          rightImage="/lovable-uploads/04069a59-98f9-4726-9ec6-1705dc5a548c.png"
          leftAlt="Simplex Noise 3D Mesh"
          rightAlt="Simplex Noise Wireframe"
          className="bg-gray-100"
        />

        {/* Minecraft Terrain Section */}
        <NoiseSection
          title="Minecraft Terrain Generation"
          description="Minecraft uses a combination of noise algorithms to generate its procedural worlds. The terrain generation starts with noise-based heightmaps and is then modified by biome-specific features. Slide to compare the generated terrain with and without surface features."
          leftImage="/lovable-uploads/3966603c-1703-4e1b-a477-34c1f8382e30.png"
          rightImage="/lovable-uploads/266eb975-4e59-4846-84eb-fe04a1c11bce.png"
          leftAlt="Minecraft Generated World with Village"
          rightAlt="Minecraft Base Terrain"
          className="bg-white"
        />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="font-semibold text-lg">Noise Algorithm Showcase</h3>
          <p className="text-gray-400 mt-2">
            An interactive visual exploration of procedural generation techniques
          </p>
          <p className="text-gray-500 mt-6 text-sm">
            © {new Date().getFullYear()} Noise Showcase. All images for educational purposes.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
