
import React from "react";
import NoiseSection from "@/components/NoiseSection";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-6">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-900">Démonstration d'Algorithmes de Bruit</h1>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Perlin Noise Section */}
        <NoiseSection
          title="Bruit de Perlin"
          leftImage="/lovable-uploads/f17e6fb3-6401-4879-a1e3-14fc7e852009.png"
          rightImage="/lovable-uploads/c8f96ee9-c021-4fe7-94c1-0d3e8a460de5.png"
          leftAlt="Texture de Bruit de Perlin"
          rightAlt="Graphique de Bruit de Perlin"
          className="bg-white"
          enableSlider={false}
        />

        {/* Simplex Noise Section */}
        <NoiseSection
          title="Bruit Simplexe"
          leftImage="/lovable-uploads/09f9523c-7eaa-4c30-aaa9-1dd7e209596f.png"
          rightImage="/lovable-uploads/04069a59-98f9-4726-9ec6-1705dc5a548c.png"
          leftAlt="Maillage 3D de Bruit Simplexe"
          rightAlt="Structure Filaire de Bruit Simplexe"
          className="bg-gray-100"
          enableSlider={false}
        />

        {/* Minecraft Terrain Section */}
        <NoiseSection
          title="Génération de Terrain Minecraft"
          leftImage="/lovable-uploads/3966603c-1703-4e1b-a477-34c1f8382e30.png"
          rightImage="/lovable-uploads/266eb975-4e59-4846-84eb-fe04a1c11bce.png"
          leftAlt="Monde Généré Minecraft avec Village"
          rightAlt="Terrain de Base Minecraft"
          className="bg-white"
          enableSlider={true}
        />
      </main>
    </div>
  );
};

export default Index;
