import fs from 'fs';
import path from 'path';

const basename  = path.basename(__filename);

let Model = {};

fs
  .readdirSync(__dirname)
  .filter((filename) => {
    // Get file's name that lives in the same directory without myself.
    return (filename.indexOf('.') !== 0) && (filename !== basename);
  })
  .forEach((filename) => {
    // If file's extension is not 'js', break.
    if (filename.slice(-3) !== '.js') return;

    var filepath = path.join(__dirname, filename)
    
    // When imported file use 'export default', object is assinged 'default'.
    var imported = (require(filepath).default) ?
      require(filepath).default :
      require(filepath);

    if (typeof imported.modelName !== 'undefined') {
      // Model definition file is expected exporting 'Model' of mongoose.
      Model[imported.modelName] = imported;
    }
  });

export default Model;
