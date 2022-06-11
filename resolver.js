const fs = require("fs");
const { lastupdate } = require("./world");
module.exports = {
  Query: {
    getWorld(parent, args, context, info) {
      updateWorld(context);
      context.world.lastupdate = Date.now();
      saveWorld(context);
      return context.world;
    },
  },
  Mutation: {
    acheterQtProduit(parent, { id, quantite }, { world }) {
      let productFind = null;

      const products = world.products.map((product) => {
        if (product.id === id) {
          if (Date.now() - world.lastupdate >= product.timeleft) {
            world.money -= product.cout * quantite;
            product.quantite += quantite;
            productFind = product;
          }
          return product;
        }
      });

      if (!productFind) {
        throw new Error(`Le produit avec l'id ${id} n'existe pas.`);
      }
      saveWorld(world);
      return productFind;
    },
    lancerProductionProduit(parent, { id, quantite }, { world }) {
      let productFind = null;
      const products = world.products.map((product) => {
        if (product.id === id) {
          product.timeleft = product.vitesse;
          productFind = product;
          world.lastupdate = Date.now();
        }
        return product;
      });
      if (!productFind) {
        throw new Error(`Le produit avec l'id ${id} n'existe pas.`);
      }
      saveWorld(world);
      return productFind;
    },
    engagerManager(parent, { name }, { world }) {
      let managerFind = null;
      console.log(world.managers);
      const managers = world.managers.map((manager) => {
        if (manager.name === name) {
          manager.unlocked = true;
          managerFind = manager;
          const products = world.products.map((product) => {
            if (product.id === manager.idcible) {
              product.managerUnlocked = true;
            }
          });
        }
        return manager;
      });
      saveWorld(world);
      if (!managerFind) {
        throw new Error(`Le manager avec le nom ${name} n'existe pas.`);
      }
    },
  },
};
function saveWorld(context) {
  fs.writeFile(
    "userworlds/" + context.user + "-world.json",
    JSON.stringify(context.world),
    (err) => {
      if (err) {
        console.error(err);
        throw new Error(`Erreur d'écriture du monde coté serveur`);
      }
    }
  );
}
function updateWorld(context) {
  let world = context.world;
  let lastupdate = world.lastupdate;
  let products = world.products;

  products.map((product) => {
    if (product.managerUnlocked === false) {
      if (product.timeleft !== null) {
        console.log(
          product.timeleft,
          Date.now() - lastupdate,
          lastupdate,
          Date.now()
        );
        if (Date.now() - lastupdate >= product.timeleft) {
          world.money += product.revenu;
          world.score += product.revenu;
        } else {
          console.log(product.timeleft);
          product.timeleft -= Date.now() - lastupdate;
        }
      }
    } else {
      // time = Date.now() - lastupdate;
      // speedTimeProduct = product.vitesse;
      // quantite = 0;
    }
  });
}
