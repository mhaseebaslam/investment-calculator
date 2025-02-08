# Investment Calculator

This repository provides a web tool to help users calculate the growth of their investments over time with compound interest. It includes simple input fields and a detailed results table, making it easy to see how initial investments and monthly contributions grow annually due to compound interest.

## Table of Contents

1. [Formulas Used in the JavaScript Code](#formulas-used-in-the-javascript-code)
   - [Investment Value Calculation](#investment-value-calculation)
   - [Total Contributions Calculation](#total-contributions-calculation)
2. [Live Demo](#live-demo)
3. [Feedback](#feedback)
4. [How to Contribute](#how-to-contribute)
5. [Future Improvements](#future-improvements)
6. [License](#license)

## Formulas Used in the JavaScript Code

### Investment Value Calculation

The value of the investment is updated each year using this formula:

```javascript
investment = (investment + month * 12) * (1 + rate)
```

Explanation:

- `investment`: The current value of the investment.
- `month * 12`: The total amount contributed annually (monthly contribution multiplied by 12).
- `rate`: The annual interest rate (as a decimal, e.g., 5% = 0.05).
- `(1 + rate)`: The factor by which the investment grows due to interest.

This formula works by:

1. Adding the annual contribution (`month * 12`) to the current investment value.
2. Applying the interest rate to the new total.

### Total Contributions Calculation

The total contributions are updated each year with this formula:

```javascript
totalContributions = totalContributions + (month * 12)
```

Explanation:

- `totalContributions`: The total amount of money contributed over the years.
- `month * 12`: The total amount contributed annually (monthly contribution multiplied by 12).

This formula simply adds the annual contribution to the total contributions so far.

## Live Demo

You can see a live preview by [clicking here](https://mhaseebaslam.github.io/investment-calculator/).

## Feedback

If you have any suggestions or feedback, please open an issue or submit a pull request. Contributions are welcome!

## How to Contribute

Contributing to this project is easy and we appreciate your help! Follow these steps to get started:

1. **Fork the Repository**:
   - Go to the repository page on GitHub.
   - Click the "Fork" button at the top right corner. This will create a copy of the repository in your GitHub account.

2. **Clone the Forked Repository**:
   - Open your terminal or command prompt.
   - Run the following command to clone the forked repository to your local machine:

     ```bash
     git clone https://github.com/your-username/investment-calculator.git
     ```

   - Replace `your-username` with your GitHub username.

3. **Create a New Branch**:
   - Navigate to the project directory:

     ```bash
     cd investment-calculator
     ```

   - Create a new branch for your feature or bug fix:

     ```bash
     git checkout -b feature-branch
     ```

   - Replace `feature-branch` with a descriptive name for your branch.

4. **Make Your Changes**:
   - Open the project in your favorite code editor.
   - Make the necessary changes or add new features.

5. **Commit Your Changes**:
   - Save your changes.
   - In the terminal, stage your changes:

     ```bash
     git add .
     ```

   - Commit your changes with a meaningful message:

     ```bash
     git commit -m 'Add new feature'
     ```

6. **Push to GitHub**:
   - Push your changes to the new branch on your forked repository:

     ```bash
     git push origin feature-branch
     ```

7. **Open a Pull Request**:
   - Go to the original repository on GitHub.
   - Click the "Compare & pull request" button.
   - Provide a clear description of your changes and submit the pull request to the `main` branch.

Thank you for your contributions! Your help is greatly appreciated.

## Future Improvements

- **Additional Compounding Frequencies**: Allow users to choose between annual, semi-annual, quarterly, or monthly compounding.
- **Inflation Adjustment**: Add an option to account for inflation to show real returns.
- **Graphical Visualization**: Include a chart or graph to visually represent the growth of the investment over time.
- **Export Options**: Enable users to export the results as a CSV or PDF file.
- **Currency Support**: Add support for multiple currencies and formatting.
- **Dark Mode**: Implement a dark mode for better usability in low-light environments.

## License

This project is licensed under the **[MIT License](LICENSE)**. You are free to use, modify, and distribute this code as per the license.

---

Made with ❤️ by [Muhammad Haseeb](https://github.com/mhaseebaslam).
