import React, { useState } from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: "100%",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    flex: "3",
    height: "100%",
    color: "white",
    border: "1px solid darkgray",
  },
  buy: {
    flex: "1",
    height: "100%",
    opacity: "70%",
  },
  input: {
    color: "#2EFF22",
  },
}));

const BuyToken = ({ buyTokenCallback }: BuyToken) => {
  const classes = useStyles();
  const [tokensToBuy, setTokensToBuy] = useState<string>("");

  const onChanceHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setTokensToBuy(e.target.value);
  };

  const buyCoins = (e: any) => {
    e.preventDefault();
    let tokensToBuyNum = parseInt(tokensToBuy, 10);
    console.log(`Passing ${tokensToBuyNum} of type ${typeof tokensToBuyNum}`);
    buyTokenCallback(tokensToBuyNum);
    setTokensToBuy("");
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={buyCoins}
    >
      <TextField
        className={classes.text}
        id="outlined-basic"
        placeholder="Buy $DRJU"
        variant="outlined"
        value={tokensToBuy}
        onChange={onChanceHandler}
        inputProps={{
          className: classes.input,
        }}
        onFocus={() => {}}
        onBlur={() => {}}
      />
      <Button
        type="submit"
        className={classes.buy}
        variant="contained"
        color="default"
      >
        Buy
      </Button>
    </form>
  );
};

interface BuyToken {
  buyTokenCallback: (numberOfTokens: number) => Promise<void>;
}

export default BuyToken;
