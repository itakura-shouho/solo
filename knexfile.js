// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "articles",
      user: "user",
      password: "password",
    },
    migrations: {
      directory: "./backend/db/migrations",
      tableName: "articles",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection:
      "postgres://user:UVKdCl9NphDAQP5Rh64qOX9gMboHnt6m@dpg-ci0ruphmbg5ffcnjls60-a/articles_621n",
    migrations: {
      directory: "./backend/db/migrations",
      tableName: "knex_migrations",
    },
  },
  pool: {
    min: 2,
    max: 10,
  },
};
