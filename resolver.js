const fs = require("fs");

function saveWorld(context) {
  fs.writeFile(
    "userworlds/" + context?.user + "-world.json",
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
  if (context.world) {
    let world = context.world;
    let lastupdate = parseInt(world.lastupdate);
    let products = world.products;
    let elapse = Date.now() - lastupdate;

    products.map((product) => {
      let revenu = product.revenu * product.quantite;
      console.log(revenu, product)
      if (product.managerUnlocked === false) {
        if (product.timeleft !== 0) {
          if (elapse >= product.timeleft) {
            context.world.money += revenu;
            context.world.score += revenu;
            product.timeleft = 0;
          } else {
            product.timeleft -= elapse;
          }
        }
      } else {
        productTime = product.vitesse;
        productQuantite = 0;
        console.log(elapse, product.timeleft);
        if (elapse >= product.timeleft) {
          productQuantite += 1;
          elapse -= product.timeleft;
          productQuantite += elapse / productTime;
          context.world.money += revenu;
          context.world.score += revenu;
          product.timeleft = productTime - (elapse % productTime);
        } else {
          product.timeleft -= elapse;
        }
      }
    });
    context.world.lastupdate = Date.now().toString();
  }
}

module.exports = {
  Query: {
    getWorld(parent, args, context, info) {
      updateWorld(context);
      saveWorld(context);

      return context.world;
    },
  },

  Mutation: {
    acheterQtProduit(parent, { id, quantite }, context) {
      const world = context.world;
      let products = context.world.products.map((product) => {
        if (product.id === id) {
          let revenu = product.cout * quantite;
          if (product.cout * quantite >= world.money) {
            context.world.money -= revenu;
            product.quantite += quantite;
            productFind = product;
            context.world.lastupdate = Date.now().toString();

            let paliers = product.palliers.map((palier) => {
              if (palier.unlocked === false) {
                if (product.quantite >= palier.seuil) {
                  palier.unlocked = true;
                }
              }
            });
            return product;
          }
        }
      });

      products = products.filter((product) => product !== undefined);

      if (!products[0]) {
        throw new Error(`Le produit avec l'id ${id} n'existe pas.`);
      }
      updateWorld(context);
      saveWorld(context);
      return products[0];
    },

    lancerProductionProduit(parent, { id }, context) {
      const world = context.world;
      let productFind = null;
      console.log("lancé");
      const products = world.products.map((product) => {
        if (product.id == id) {
          product.timeleft = product.vitesse;
          world.lastupdate = Date.now().toString();
          productFind = product;
        }
        return product;
      });

      if (!productFind) {
        throw new Error(`Le produit avec l'id ${id} n'existe pas.`);
      }
      updateWorld(context);
      saveWorld(context);
      return productFind;
    },

    engagerManager(parent, { name }, context) {
      const world = context.world;
      let managerFind = null;

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
      saveWorld(context);
      updateWorld(context);

      if (!managerFind) {
        throw new Error(`Le manager avec le nom ${name} n'existe pas.`);
      }
    },
  },
};
