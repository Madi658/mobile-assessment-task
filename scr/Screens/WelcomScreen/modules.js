const resetroute = (routename, screenname,CommonActions,navigation) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name:routename,
            screen:screenname,
          },
        ],
      }),
    );
  };
export {resetroute};