export default (error) => [error.message, error.stack].join("\n");
