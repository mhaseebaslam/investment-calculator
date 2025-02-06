# Investment Calculator

This repository has a browser-based tool designed to help users calculate the growth of their investments over time using compound interest. With simple input fields and a detailed results table, users can easily understand how their initial investment and monthly contributions grow annually with compound interest.

## Formulas Used in the JavaScript Code

1. **Investment Value Calculation**: The investment value is updated each year based on the following formula:

   `investment = (investment + month * 12) * (1 + rate)`

   Explanation:
   - `investment`: The current value of the investment.
   - `month * 12`: The total annual contribution (monthly contribution multiplied by 12 months).
   - `rate`: The annual interest rate (expressed as a decimal, e.g., 5% = 0.05).
   - `(1 + rate)`: The growth factor due to the interest rate.

   This formula calculates the new investment value by:
   1. Adding the annual contribution (`month * 12`) to the current investment value.
   2. Applying the interest rate to the total amount.

2. **Total Contributions Calculation**: The total contributions are updated each year using the following formula:

   `totalContributions = totalContributions + (month * 12)`

   Explanation:
   - `totalContributions`: The cumulative amount of money contributed over the years.
   - `month * 12`: The total annual contribution (monthly contribution multiplied by 12 months).

   This formula simply adds the annual contribution to the running total of contributions.

## Live Demo

Check out the live preview by [click here](https://mhaseebaslam.github.io/investment-calculator/)

## Future Improvements

- **Additional Compounding Frequencies**: Allow users to choose between annual, semi-annual, quarterly, or monthly compounding.
- **Inflation Adjustment**: Add an option to account for inflation to show real returns.
- **Graphical Visualization**: Include a chart or graph to visually represent the growth of the investment over time.
- **Export Options**: Enable users to export the results as a CSV or PDF file.
- **Currency Support**: Add support for multiple currencies and formatting.
- **Dark Mode**: Implement a dark mode for better usability in low-light environments.

## Feedback

If you have any suggestions or feedback, feel free to open an issue or submit a pull request. Contributions are welcome!

## License

This project is licensed under the **[MIT License](LICENSE)**. You are free to use, modify, and distribute this code as per the license.

---

Made with ❤️ by [Muhammad Haseeb](https://github.com/mhaseebaslam).
