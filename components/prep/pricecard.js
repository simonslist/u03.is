import * as React from "react"

const PriceCard = ({ type, price, recommendation }) => {
  return (
    <div class="col-span-12 rounded-2xl bg-white p-4 shadow-lg dark:bg-gray-800 lg:col-span-4">
      <div class="flex justify-between pb-10">
        <span class="text-md font-medium text-gray-800 dark:text-gray-50">
          {type}
        </span>
        <span class="text-md font-bold text-gray-900 dark:text-white">
          ${price}
        </span>
      </div>

      <p>{recommendation}</p>
    </div>
  )
}

export default PriceCard
