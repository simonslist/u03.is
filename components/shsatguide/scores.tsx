

const Scores = () => {
  return (
    <div> 
      <div className="overflow-x-auto pt-20">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>School</th>
              <th>2023</th>
              <th>2022</th>
              <th>2021</th>
              <th>2020</th>
              <th>2019</th>
              <th>2018</th>
              <th>2017</th>
              <th>2016</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>Stuyvesant</th>
              <td>TBA</td>
              <td></td>
              <td>560</td>
              <td>566</td>
              <td>557</td>
              <td>559</td>
              <td>555</td>
              <td>552</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>Bronx Science</th>
              <td>TBA</td>
              <td></td>
              <td>517</td>
              <td>532</td>
              <td>525</td>
              <td>518</td>
              <td>512</td>
              <td>511</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>Brooklyn Tech.</th>
              <td>TBA</td>
              <td></td>
              <td>492</td>
              <td>507</td>
              <td>498</td>
              <td>493</td>
              <td>486</td>
              <td>482</td>
            </tr>
            <tr>
              <th>HSMSE @ CCNY.</th>
              <td>TBA</td>
              <td></td>
              <td>515</td>
              <td>523</td>
              <td>519</td>
              <td>516</td>
              <td>504</td>
              <td>513</td>
            </tr>
            <tr>
              <th>HSAS @ Lehman</th>
              <td>TBA</td>
              <td></td>
              <td>488</td>
              <td>520</td>
              <td>524</td>
              <td>516</td>
              <td>516</td>
              <td>506</td>
            </tr>
            <tr>
              <th>Queens Science York</th>
              <td>TBA</td>
              <td></td>
              <td>481</td>
              <td>535</td>
              <td>514</td>
              <td>511</td>
              <td>507</td>
              <td>516</td>
            </tr>
            <tr>
              <th>Brooklyn Latin</th>
              <td>TBA</td>
              <td></td>
              <td>481</td>
              <td>498</td>
              <td>488</td>
              <td>482</td>
              <td>479</td>
              <td>477</td>
            </tr>
            <tr>
              <th>Staten Island Tech</th>
              <td>TBA</td>
              <td></td>
              <td>525</td>
              <td>551</td>
              <td>527</td>
              <td>519</td>
              <td>515</td>
              <td>508</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Scores;
