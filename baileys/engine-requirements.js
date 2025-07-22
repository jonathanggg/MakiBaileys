const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 20) {
  console.error(
    `\n❌ Este paquete requiere Node.js 20+ para ejecutarse de manera confiable.\n` +
    `   Tu estás usando ${process.versions.node}.\n` +
    `   Actualice a Node.js 20+ para continuar.\n`
  );
  process.exit(1);
}
