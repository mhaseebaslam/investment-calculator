# Investment Calculator

The **Compound Interest Calculator** is a browser-based tool designed to help users calculate the growth of their investments over time using compound interest. Whether you're planning for retirement, saving for a big purchase, or just curious about how your money can grow, this tool provides a clear and interactive way to visualize your investment's potential. With simple input fields and a detailed results table, users can easily understand how their initial investment and monthly contributions grow annually with compound interest.

The tool assumes that interest is compounded annually at the end of each year, and it displays both the investment value with interest and the total contributions made over the years.

## Formula Used

The tool uses the **compound interest formula** to calculate the investment growth. Here's how it works:

1. **Annual Contribution**:  
   `Annual Contribution = Monthly Contribution × 12`

2. **Yearly Growth**:  
   `Investment Value = (Previous Balance + Annual Contribution) × (1 + Interest Rate)`

   Where:
   - `Previous Balance` is the investment value at the end of the previous year.
   - `Interest Rate` is the annual interest rate in decimal form (e.g., 5% = 0.05).

3. **Total Contributions**:  
   `Total Contributions = Initial Investment + (Monthly Contribution × 12 × Number of Years)`

## Technologies Used

- **HTML5**: For structuring the input fields and result table.
- **CSS3**: For styling the tool, making it responsive and visually appealing.
- **JavaScript**: For handling calculations, updating the table dynamically, and ensuring interactivity.

## Future Improvements

- **Additional Compounding Frequencies**: Allow users to choose between annual, semi-annual, quarterly, or monthly compounding.
- **Inflation Adjustment**: Add an option to account for inflation to show real returns.
- **Graphical Visualization**: Include a chart or graph to visually represent the growth of the investment over time.
- **Export Options**: Enable users to export the results as a CSV or PDF file.
- **Currency Support**: Add support for multiple currencies and formatting.
- **Dark Mode**: Implement a dark mode for better usability in low-light environments.

## License

This project is licensed under the [MIT License](LICENSE).
