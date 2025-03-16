function pcStore(cpu, gpu, ram, ramCounts, discounts) {
  let conversionRate = 1.57;

  let cpuPriceInUSD = cpu;
  let gpuPriceInUSD = gpu;
  let ramPriceInUSD = ram;
  let ramCount = ramCounts;
  let discount = discounts;

  let cpuPriceInBGN = cpuPriceInUSD * conversionRate;
  let gpuPriceInBGN = gpuPriceInUSD * conversionRate;
  let ramPriceInBGN = ramPriceInUSD * conversionRate;

  let cpuAfterDiscount = cpuPriceInBGN - cpuPriceInBGN * discount;
  let gpuAfterDiscount = gpuPriceInBGN - gpuPriceInBGN * discount;
  let ramTotal = ramPriceInBGN * ramCount;

  let totalSum = cpuAfterDiscount + gpuAfterDiscount + ramTotal;

  console.log(`Money needed - ${totalSum.toFixed(2)} leva.`);
}

pcStore(500, 200, 80, 2, 0.05);
