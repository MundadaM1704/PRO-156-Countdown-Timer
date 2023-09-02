AFRAME.registerComponent("fish", {
  init: function () {
    for (var i = 1; i <= 10; i++) {
      const id = `fish${i}`;

      const posX = Math.random() * 100 + -50;
      const posY = Math.random() * 5 + 5;
      const posZ = Math.random() * 60 + -40;

      const position = { x: posX, y: posY, z: posZ };
      this.generateFish(id, position);
    }
  },
  generateFish: function (id, position) {
    const fishModelEntity = document.querySelector("#fishModels");
    var fishE1 = document.createElement("a-entity");

    fishE1.setAttribute("id", id);
    fishE1.setAttribute("position", position);
    fishE1.setAttribute("rotation", { x: 0, y: 180, z: 0 });
    fishE1.setAttribute("scale", { x: 0.3, y: 0.3, z: 0.3 });
    fishE1.setAttribute("gltf-model", "./assets/fish/scene.gltf");
    fishE1.setAttribute("animation", {
      property: "position",
      to: "100 10 -20",
      loop: "true",
      dur: 20000,
    });
    fishE1.setAttribute("animation-mixer", {});

    fishE1.setAttribute("static-body", {
      shape: "sphere",
      sphereRadius: 2,
    });

    fishE1.setAttribute("game-play", {
      elementId: `#${id}`,
    });

    fishModelEntity.appendChild(fishE1);
  },
});
