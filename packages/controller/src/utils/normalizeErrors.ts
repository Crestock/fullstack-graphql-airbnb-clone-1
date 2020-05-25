interface Error {
  path: string;
  message: string;
}

export const normalizeErrors = (errors: Error[]) => {
  const errMap: { [key: string]: string } = {};

  errors.forEach((err: Error) => {
    errMap[err.path] = err.message;
  });

  return errMap;
};
