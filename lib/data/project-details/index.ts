import { kartverketProject } from './kartverket';
import { nuketownProject } from './nuketown';

export { kartverketProject, nuketownProject };

// You can also export a lookup object if that's more convenient
export const projectDetails = {
  project_1: kartverketProject,
  project_2: nuketownProject
};