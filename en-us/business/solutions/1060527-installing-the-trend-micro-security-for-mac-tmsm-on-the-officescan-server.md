---

layout: en-solution

meta-title: Installing the Trend Micro Security for Mac (TMSM) on the OfficeScan server

heading-title: Installing the Trend Micro Security for Mac (TMSM) on the OfficeScan server

solutionUpdated: Oct 19, 2016
solutionVersion: OfficeScan 10.6
solutionPlatform: Windows 2003 Enterprise
solutionRating: 10
solutionView:
solutionCategory: Install
solutionID: 1060527

solutionProduct: OfficeScan
solutionType: deploy-and-install

---

{% capture solution-summary %}
  <p>
    Learn the procedure for installing TMSM on the OfficeScan server.
  </p>
{% endcapture %}

{% capture solution-details %}

  <div class="panel-group" id="accordion" style="margin: 0;">

    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title display-7">
          <a class="accordion-title display-7" data-toggle="collapse" data-parent="#accordion" href="#collapse-1">Features of Rootkit Buster</a>
        </h4>
      </div>
      <div class="panel-collapse collapse in" id="collapse-1">
        <div class="panel-body">
          <ul class="list list-bullet list-indent list-nospace">
            <li>User mode Rootkit detection</li>
            <li>Kernel mode Rootkit detection</li>
            <li>Hidden files detection</li>
            <li>Hidden registry entries detection</li>
            <li>Hidden processes detection</li>
            <li>Hidden drivers detection</li>
            <li>Hooked system service detection</li>
            <li>Hidden files cleaning capability</li>
            <li>Hidden registry entries cleaning capability</li>
            <li>Detects the latest FU2 Rootkit</li>
            <li>Support hidden MBR cleanup for all disk type</li>
            <li>Support the detection and cleanup of RTKT_NECURS</li>
            <li>Detection for malicious MBR modification</li>
            <li>Support Windows 8.1</li>
            <li>Detection for system directory permission was removed</li>
            <li>Detection for malicious MBR modification</li>
            <li>Enhance MBR and VBR detection and cleanup</li>
            <li>Support TROJ_GEN.RCBC8GK (GETH)</li>
            <li>Fix some BSOD and false positive issues</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title display-7">
          <a class="accordion-title display-7" data-toggle="collapse" data-parent="#accordion" href="#collapse-2">Download and run the Rootkit Buster </a>
        </h4>
      </div>
      <div class="panel-collapse collapse" id="collapse-2">
        <div class="panel-body">
          <p>To use the Rootkit Buster:</p>
          <ul class="list list-number list-indent list-nospace">
            <li>
              <p>
                Download the Rootkit Buster file that corresponds to your system type and save the file on your desktop. You may <a href="">check first your version of Windows operating system</a> when you are not sure with your system type.
              </p>
              <ul class="list list-bullet list-indent list-nospace">
                <li><a>32-bit</a></li>
                <li><a>64-bit</a></li>
              </ul>
            </li>
            <li>
              <p>
                Do either of the following:
              </p>
              <ul class="list list-bullet list-indent list-nospace">
                <li>
                  <p>
                    For Windows XP: Double-click <b>RootkitBuster.exe&nbsp;</b>to run the file.
                  </p>
                  <p>
                    <img src="{{ site.baseurl }}/assets/images/image-placeholder.png" alt="">
                  </p>
                </li>
                <li>
                  <p>
                    For Windows Vista, 7 and 8: Right-click <b>RootkitBuster.exe</b>, then select <b>Run as administrator</b>. The following error message appears when you do not run the installer with administrator privileges:
                  </p>
                  <p>
                    <img src="{{ site.baseurl }}/assets/images/image-placeholder.png" alt="">
                  </p>
                </li>
              </ul>
            </li>
            <li>Read the license agreement.</li>
            <li>
              <p>
                Select <b>I accept the terms of the license agreement</b>, then click <b>Next</b>.
              </p>
              <p>
                <img src="{{ site.baseurl }}/assets/images/image-placeholder.png" alt="">
              </p>
            </li>
            <li>
              <p>
                Click <b>Scan Now</b>.
              </p>
              <p>
                <img src="{{ site.baseurl }}/assets/images/image-placeholder.png" alt="">
              </p>
              <p>
                Wait for the program to finish scanning your computer until you see the result of the scan.
              </p>
              <p>
                <img src="{{ site.baseurl }}/assets/images/image-placeholder.png" alt="">
              </p>
            </li>
            <li>
              <p>
                Tick the detected threats, then click <b>Fix Now</b>.
              </p>
              <p>
                <img src="{{ site.baseurl }}/assets/images/image-placeholder.png" alt="">
              </p>
              <p>
                Wait for the Trend Micro Rootkit Buster to fix the threats.
              </p>
              <p>
                <img src="{{ site.baseurl }}/assets/images/image-placeholder.png" alt="">
              </p>
            </li>
            <li>
              <p>
                Click <b>Restart Now&nbsp;</b>to finish the cleanup.
              </p>
              <p>
                <img src="{{ site.baseurl }}/assets/images/image-placeholder.png" alt="">
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
{% endcapture %}

{% capture solution-related-articles %}
  <ul class="list list-condensed">
    <li><a href="">Free anti-malware tools that you can use</a></li>
    <li><a href="">Technical Support: OfficeScan 11.0</a></li>
    <li><a href="">Technical Support: Worry-Free Business Security Services</a></li>
  </ul>
{% endcapture %}


{% include _en-us/solution.html %}
