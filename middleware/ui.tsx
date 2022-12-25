import { PAGE_LOADED } from "../actions/ui";

export const pageLoadedFlow = ({ log }: { log: any }) => ({ dispatch }: { dispatch: any }) => (next: any) => (
  action: any
) => {
  next(action);

  if (action.type === PAGE_LOADED) {
    log(PAGE_LOADED, "{middleware}");
    //dispatch(loadTodos);
  }
};

export default [pageLoadedFlow];
