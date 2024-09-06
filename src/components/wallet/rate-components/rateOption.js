const RateOption = ({
  setTariffIdd,
  setValue,
  response,
  setCost,
}) => {
  let wallet = response && response.tariffs;
  let walletT = response && response.tariffTypes;
  return (
    <div className="container-chat-two">
      <div className="rate-block">
        {response &&
          walletT.map((tariffType) => {
            return (
              <div className="block-rate" key={tariffType.tariffType}>
                <h1>{tariffType.tariffTypeName}</h1>
                <span>{tariffType.tariffTypeDescription}</span>
                <div className="block-feedback">
                  {wallet
                    .filter((tariff) => tariff.tariffType === tariffType.tariffType)
                    .map((tariff) => {
                      return (
                        <button
                          className="button-rate"
                          onClick={() => {
                            setValue(tariffType.tariffTypeName + " - " + tariff.tariffName);
                            setCost(tariff.tariffCost);
                            setTariffIdd(tariff.tariffId)
                          }}
                          key={tariff.tariffName}
                        >
                          <p>{tariff.tariffName}</p>
                        </button>
                      );
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RateOption;